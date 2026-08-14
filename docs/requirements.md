# Team 51 Mock Sprint Requirements

## Feature

Create a styled login page that leads to a Team 51 team page, using the existing boilerplate.

## Team Page Requirements

The team page must display:

- Team name
- Each team member's:
  - photo
  - full name
  - role
  - short blurb

## Team Members

- Sukritee Nayak Chhetri — Project Manager
- Tom Nunan — Business Analyst
- Agavita Juwono — UX
- Juan Sadie — Developer

## Display Rules

- Each team member should be clearly identifiable.
- Names and roles must be readable.
- Photos should display consistently.
- Short blurbs should support different text lengths without breaking the layout.
- The page should still display correctly if a member does not have a photo.
- The team name should be clearly visible.

## Login Scope

The login work is styling-only.

The existing boilerplate login behaviour must remain unchanged.

Do not modify:

- authentication logic
- login validation
- session handling

Only visual presentation should be changed.

After a successful login, the user should be taken to the team page.

## Edge Cases

The design should account for:

- a team member without a profile photo
- long member names
- different role-name lengths
- short blurbs of different lengths
- missing optional profile content
- layout remaining usable when content lengths vary

## UX Handoff

UX should design the login page and team page based on these requirements.

The UX design should account for missing photos and variable-length blurbs.

Any significant change to these requirements should be discussed with the BA before development begins.
