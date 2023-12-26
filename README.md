# The Code Forge

A single mono-repo for all my Typescript practice projects, with a website that hosts suitably auto-generated display pages for each project.

3 types of projects:

1. Full stack - these are deployed independently as self contained units. They live in the apps folder, and are linked to from the main site automatically
2. Frontend-only - these are automatically deployed as a web page on the main site for each one.
3. Code-only - each “challenge source”, such as advent of code or leet code, will have its own way for automatically displaying these. Don't necessarily need to be Typescript.

### Mono repo structure:

```
/show_room  <-- NextJS project that acts as the public gateway to all of these
  /src  <-- Code of the actual show room website. Contains some git-ignored, automatically generated, code.
  /scripts <-- Contains generation scripts that must be run
  ... config files ...

/packages   <-- Regular reusable packages

/full_stacks  <-- Home for all the full stack apps. Each is deployed independently.
  /<project_1>   <-- Each project is its own package in the monorepo.

/fe_products    <-- Frontend-only projects.
  /<project_1>   <-- Each project is its own package in the monorepo.

/code_products    <-- Code-only projects. Do not have to be in typescript.
  /advent_of_code   <-- Single package for all Advent of Code solutions
  /leet_code    <-- Single package for all LeetCode solutions.
```

### Build steps:

1. Run `yarn`
2. Run `yarn generate`
3. Run `yarn build`
