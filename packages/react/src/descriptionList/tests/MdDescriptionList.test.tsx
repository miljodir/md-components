import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdDescriptionList, MdDescriptionListItem } from '../MdDescriptionList';

describe('MdDescriptionList', () => {
  describe('rendering', () => {
    it('renders a description list (dl) element', () => {
      const { container } = render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Name">John</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(container.querySelector('dl')).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Name">John Doe</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders multiple items', () => {
      render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Name">John</MdDescriptionListItem>
          <MdDescriptionListItem label="Email">john@example.com</MdDescriptionListItem>
          <MdDescriptionListItem label="Phone">123-456-7890</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Phone')).toBeInTheDocument();
    });
  });

  describe('narrow mode', () => {
    it('applies narrow class when narrow is true', () => {
      const { container } = render(
        <MdDescriptionList narrow>
          <MdDescriptionListItem label="Name">John</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(container.querySelector('.md-description-list--narrow')).toBeInTheDocument();
    });

    it('does not apply narrow class by default', () => {
      const { container } = render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Name">John</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(container.querySelector('.md-description-list--narrow')).not.toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('merges custom className', () => {
      const { container } = render(
        <MdDescriptionList className="custom-class">
          <MdDescriptionListItem label="Name">John</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(container.querySelector('.md-description-list')).toHaveClass('custom-class');
    });
  });
});

describe('MdDescriptionListItem', () => {
  describe('rendering', () => {
    it('renders dt (term) and dd (description) elements', () => {
      const { container } = render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Label">Value</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(container.querySelector('dt')).toBeInTheDocument();
      expect(container.querySelector('dd')).toBeInTheDocument();
    });

    it('renders label in dt', () => {
      render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Username">john123</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(screen.getByText('Username').tagName).toBe('DT');
    });

    it('renders children in dd', () => {
      render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Username">john123</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(screen.getByText('john123').tagName).toBe('DD');
    });

    it('renders label as ReactNode', () => {
      render(
        <MdDescriptionList>
          <MdDescriptionListItem label={<strong data-testid="bold-label">Bold</strong>}>Value</MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(screen.getByTestId('bold-label')).toBeInTheDocument();
    });

    it('renders children as ReactNode', () => {
      render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Link">
            <a href="/page" data-testid="link">
              Click here
            </a>
          </MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(screen.getByTestId('link')).toBeInTheDocument();
    });

    it('renders array of children', () => {
      render(
        <MdDescriptionList>
          <MdDescriptionListItem label="Tags">
            {['React', 'TypeScript', 'CSS'].map(tag => {
              return (
                <span key={tag} data-testid={`tag-${tag}`}>
                  {tag}
                </span>
              );
            })}
          </MdDescriptionListItem>
        </MdDescriptionList>,
      );
      expect(screen.getByTestId('tag-React')).toBeInTheDocument();
      expect(screen.getByTestId('tag-TypeScript')).toBeInTheDocument();
      expect(screen.getByTestId('tag-CSS')).toBeInTheDocument();
    });
  });
});
