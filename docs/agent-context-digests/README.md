# Agent Context Documentation System

## Purpose
This directory contains context files that enable seamless handoffs between specialized agents working on the CARE Collective platform. Each agent must read relevant context before beginning work.

## File Structure
- **`shared-project-state.md`** - Current sprint status, budget, blockers, and cross-agent information
- **`tech-lead-decisions.md`** - Architectural decisions and technical foundation setup
- **`user-research-insights.md`** - Latest caregiver feedback and usability findings (created as needed)
- **`technical-decisions-log.md`** - ADRs and architecture choices (created as needed)
- **`accessibility-requirements.md`** - WCAG compliance status and user needs (created as needed)

## Agent Context Loading Protocol
Before starting work, each agent MUST:

1. **Read `shared-project-state.md`** - Understand current status, budget, and priorities
2. **Check their agent-specific context** (if it exists in `agent-specific/` folder)
3. **Review budget constraints** - 20 hours total, track time carefully
4. **Identify dependencies** - What other agents are working on that affects your work
5. **Update context files** - Keep shared state current as you work

## Agent Specializations
- **Tech Lead** - Architecture, setup, agent coordination
- **Frontend Engineer** - UI components, pages, user interactions
- **Backend & DB Engineer** - Database schema, Supabase setup, data layer
- **Security & DevOps** - Authentication, authorization, deployment security
- **UX/UI Designer** - User experience, accessibility, design system
- **QA & Accessibility Specialist** - Testing, WCAG compliance, user validation
- **Documentation Specialist** - User guides, technical docs, handoff materials

## Budget Tracking Protocol
- **Total Budget:** $500 (20 hours @ $25/hour)
- **Update `shared-project-state.md`** with hours spent after each work session
- **Alert at 80% budget** - Automatic scope reduction protocols
- **Track in project/budget.md** for detailed logging

## Context Quality Standards
- Update context files within 2 hours of completing significant work
- New agents should be productive within 30 minutes of context review
- All architectural decisions must be documented with rationale
- User needs and constraints must be visible to all agents

## Emergency Escalation
- **Budget Risk (>80% spent):** Alert Tech Lead immediately
- **Security Concerns:** Alert Security & DevOps Agent
- **Accessibility Blockers:** Alert QA & Accessibility Specialist
- **User Feedback Issues:** Alert UX/UI Designer + Tech Lead