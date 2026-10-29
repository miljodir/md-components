import { Buffer } from 'node:buffer';
import process from 'node:process';

const requestUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
const requestToken = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;

if (!requestUrl || !requestToken) {
  throw new Error('OIDC request credentials are unavailable. Check id-token: write.');
}

const url = new URL(requestUrl);
url.searchParams.set('audience', 'npm:registry.npmjs.org');

let response;
try {
  response = await fetch(url, {
    headers: { Authorization: `Bearer ${requestToken}` },
    signal: AbortSignal.timeout(30000),
  });
} catch {
  throw new Error('Could not request the GitHub OIDC token.');
}

if (!response.ok) {
  throw new Error(`GitHub OIDC request failed with HTTP ${response.status}.`);
}

let claims;
try {
  const body = await response.json();
  if (typeof body.value !== 'string' || body.value.split('.').length !== 3) {
    throw new Error('Invalid token.');
  }
  const payload = body.value.split('.')[1];
  claims = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
  if (!claims || typeof claims !== 'object' || Array.isArray(claims)) {
    throw new Error('Invalid claims.');
  }
} catch {
  throw new Error('GitHub returned an invalid OIDC token response.');
}

const fields = [
  'iss',
  'aud',
  'sub',
  'repository',
  'repository_id',
  'repository_owner',
  'repository_owner_id',
  'repository_visibility',
  'workflow_ref',
  'job_workflow_ref',
  'ref',
  'event_name',
  'environment',
];
const identity = {};
for (const field of fields) {
  const value = claims[field];
  if (typeof value === 'string' ||
      (field === 'aud' && Array.isArray(value) && value.every(item => typeof item === 'string'))) {
    identity[field] = value;
  }
}

console.log('GitHub OIDC identity for npm (allowlisted claims only):');
console.log(JSON.stringify(identity, null, 2));
