# AGENTS

This document describes the autonomous agents available for the Trusted Local Tech project. Agents are specialized tools designed to handle specific workflows, from codebase exploration to design system synthesis and component generation.

## Table of Contents

- [Overview](#overview)
- [Available Agents](#available-agents)
- [Usage Patterns](#usage-patterns)
- [Agent Selection Guide](#agent-selection-guide)
- [Integration & Workflow](#integration--workflow)
- [Best Practices](#best-practices)

---

## Overview

Agents are autonomous or semi-autonomous systems that can perform specialized tasks within the Trusted Local Tech development workflow. They excel at multi-step operations, parallel processing, and domain-specific problem-solving without requiring constant user direction.

### Key Characteristics

- **Autonomous**: Agents operate independently once given clear instructions
- **Specialized**: Each agent is optimized for specific domains (exploration, design, components, performance)
- **Stateless**: Individual invocations do not depend on previous invocations
- **Detailed**: Agents accept comprehensive prompts and return structured results
- **Safe**: Read-only exploration agents operate without modifying code

---

## Available Agents

### Explore

**Purpose**: Fast read-only codebase exploration and question-answering

**When to Use**:
- Understanding project structure and architecture
- Locating specific code patterns or implementations
- Quick Q&A about existing codebase
- Analyzing component relationships
- Avoiding manual chaining of multiple search operations

**Features**:
- Parallel file reading and searching
- Semantic understanding of codebase patterns
- Detailed Q&A responses with code references
- No modifications to workspace
- Throttle control via thoroughness parameter

**Usage Example**:
```
/explore
Quick search for where the HomePage component renders services.
Thoroughness: quick
```

**Parameters**:
- `prompt` (required): Describe what you're looking for
- `description` (required): Short description of the task
- `thoroughness` (optional): `quick`, `medium`, or `thorough` — defaults to `quick`
  - **Quick**: Surface-level search, 1-2 minutes
  - **Medium**: Balanced depth and speed, 2-5 minutes
  - **Thorough**: Comprehensive analysis, 5+ minutes

**Output Format**: 
- Structured findings with file references
- Code snippets with context
- Clear navigation paths within the codebase

---

## Usage Patterns

### When to Use Agents vs. Direct Exploration

| Task | Recommended | Reason |
|------|-------------|--------|
| Find where a component is used | Explore agent | Parallel search across codebase |
| Understand routing structure | Explore agent (medium) | Requires multi-file analysis |
| Quick syntax check | Direct editor | Immediate visual feedback |
| Refactor 1-2 files | Direct editor | Tight feedback loop |
| Refactor 5+ files | Design work first, then component sync | Requires holistic approach |
| Design system analysis | Design skill | Specialized semantic synthesis |
| Component generation | React-components skill | AST-based validation |

### Invocation Syntax

Agents are invoked via chat interface using the `/` command pattern:

```
/explore [prompt]
```

**Example**:
```
/explore
Find all uses of the CTAButton component and describe its variants.
Thoroughness: medium
```

---

## Agent Selection Guide

### Decision Tree

**Question 1**: Do you need to understand existing code?
- **Yes** → Use **Explore** agent
- **No** → Proceed to Question 2

**Question 2**: Are you modifying or creating?
- **Modifying** → Use direct editor + targeted searches
- **Creating** → Use design or component skills

**Question 3**: Is it design-related?
- **Yes** → Use stitch-design or taste-design skill
- **No** → Use react-components or related skill

---

## Integration & Workflow

### Typical Workflow

1. **Exploration Phase**
   - Use Explore agent (quick) to understand current structure
   - Identify gaps or areas needing work

2. **Planning Phase**
   - Use stitch-design skill for visual/interaction design
   - Create or update DESIGN.md file

3. **Implementation Phase**
   - Use react-components skill for code generation
   - Direct editor for tweaks and refinement

4. **Validation Phase**
   - Use Explore agent (medium) for verification
   - Manual testing in development environment

### Parallel Processing

Agents do not run asynchronously; they complete before returning. For independent tasks:
- Launch multiple agent invocations in separate chat turns
- Wait for each result before proceeding to dependent work

### Deferring Complex Work

For multi-step, multi-file refactoring:
1. Use Explore to understand current state
2. Use skills (design, components) to architect changes
3. Apply changes systematically
4. Use Explore to verify results

---

## Best Practices

### 1. Craft Clear Prompts

**Poor**: "Find component stuff"  
**Good**: "Find all React components in src/shared/components/ and describe their prop interfaces and primary use cases"

**Elements of a good prompt**:
- Specific file paths or scopes
- Clear expected output format
- Context on why you're asking
- Desired thoroughness level

### 2. Leverage Thoroughness Parameter

- **Quick**: Initial reconnaissance, syntax questions, single-file lookups
- **Medium**: Understanding relationships, multi-file patterns, architecture questions
- **Thorough**: Comprehensive refactor planning, security audits, design system analysis

### 3. Reference Results Effectively

When an agent provides file references:
- Use the provided line numbers to jump directly to code
- Copy code snippets for immediate reference
- Follow the file structure for consistent patterns

### 4. Verify Before Implementing

Always review agent findings before taking action:
- Spot-check critical paths
- Confirm assumptions with direct inspection
- Use quick editor preview for visual changes

### 5. Combine Skills and Agents

**Design workflow**:
```
1. Explore (medium) → Understand current design patterns
2. stitch-design skill → Create/enhance DESIGN.md
3. Explore (quick) → Verify design system coverage
```

**Component workflow**:
```
1. Explore (medium) → Find similar existing components
2. react-components skill → Generate new components
3. Explore (quick) → Verify generation and integration
```

### 6. Document Agent-Generated Changes

When agents or skills generate code:
- Review the full output before committing
- Add comments explaining non-obvious patterns
- Update type definitions if needed
- Run lint/type checks immediately

### 7. Handle Agent Limitations

**Agents cannot**:
- Run terminal commands or execute builds
- Access external APIs or real-time data
- Modify files directly (use skills for that)
- Guarantee 100% accuracy (always verify)

**Workarounds**:
- Use direct terminal for execution
- Copy agent findings and manually apply changes
- Cross-reference multiple agent runs for critical decisions

---

## Troubleshooting

### Agent Not Found

If an agent isn't recognized:
- Verify agent name spelling and capitalization
- Check that VS Code Copilot extension is active
- Ensure proper chat interface context

### Incomplete Results

If results seem incomplete:
- Increase thoroughness parameter
- Provide more specific scope in prompt
- Split complex questions into focused sub-questions
- Use Explore agent directly instead of expecting inline answers

### Slow Performance

If agent operations are slow:
- Reduce thoroughness level
- Narrow scope (specific file paths)
- Check workspace size (large projects may be slower)

---

## Related Documentation

- [README.md](README.md) — Project overview and structure
- [DESIGN.md](.stitch/DESIGN.md) — Design system specifications
- [Skills Documentation](c:\Users\user1\.agents\skills) — Detailed skill guides

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| May 8, 2026 | 1.0.0 | Initial documentation |

---

**Last Updated**: May 8, 2026  
**Maintained By**: Development Team  
**Status**: Active

