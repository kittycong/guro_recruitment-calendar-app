```markdown
# guro_recruitment-calendar-app Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill introduces the core development patterns and conventions found in the `guro_recruitment-calendar-app` JavaScript repository. The codebase is a calendar application focused on recruitment workflows, written in plain JavaScript without a frontend framework. You'll learn about file organization, import/export styles, commit habits, and how to run and write tests.

## Coding Conventions

### File Naming
- **Style:** camelCase
- **Example:**  
  ```
  recruitmentCalendar.js
  eventManager.js
  ```

### Import Style
- **Relative imports** are used throughout the codebase.
- **Example:**
  ```javascript
  import { getEvents } from './eventManager.js';
  ```

### Export Style
- **Named exports** are preferred.
- **Example:**
  ```javascript
  // In eventManager.js
  export function getEvents() { ... }
  export function addEvent(event) { ... }
  ```

### Commit Patterns
- **Type:** Freeform (no enforced prefixes)
- **Average length:** ~64 characters
- **Example:**
  ```
  Add function to handle recurring events in calendar
  Fix bug in event deletion logic
  ```

## Workflows

### Running Tests
**Trigger:** When you want to verify code correctness or before submitting changes  
**Command:** `/run-tests`

1. Locate test files matching the `*.test.*` pattern.
2. Use the project's preferred method to run tests (framework unknown; check README or scripts).
3. Review test output and fix any failing tests.

### Adding a New Feature
**Trigger:** When implementing a new calendar feature  
**Command:** `/add-feature`

1. Create a new JavaScript file using camelCase naming.
2. Use relative imports to include dependencies.
3. Export new functions or constants using named exports.
4. Write corresponding test files with the `*.test.*` pattern.
5. Commit changes with a clear, descriptive message.

### Refactoring Code
**Trigger:** When improving or reorganizing existing code  
**Command:** `/refactor-code`

1. Identify code to refactor (e.g., functions, modules).
2. Rename files or variables using camelCase.
3. Update all relative imports accordingly.
4. Ensure all exports remain named.
5. Run tests to confirm nothing is broken.
6. Commit with a message describing the refactor.

## Testing Patterns

- **Test file pattern:** `*.test.*` (e.g., `eventManager.test.js`)
- **Framework:** Not specified—check for test runner in project scripts or documentation.
- **Test organization:** Tests are placed alongside or near the modules they test.
- **Example:**
  ```javascript
  // eventManager.test.js
  import { getEvents } from './eventManager.js';

  test('should return an empty array when no events', () => {
    expect(getEvents()).toEqual([]);
  });
  ```

## Commands
| Command        | Purpose                                         |
|----------------|-------------------------------------------------|
| /run-tests     | Run all test files in the repository            |
| /add-feature   | Steps to add a new feature to the codebase      |
| /refactor-code | Steps to refactor existing code safely          |
```
