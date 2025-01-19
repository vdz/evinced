# Evinced Table Component Take (working title)

This is a small showcase on how it's possible to build a reusable table component for Evinced.

I used an approach that is different from the approach we'd discussed in the meeting, just for a divercity's sake. I have used Next.js for routing and other tooling. Tanstack table for a quicker way to build a table with basic feature set, that can be used as an atomic dependency for any table. And finally, I've used Zustand for a state management for it's simplicity, expanability, and easy persistence feature.

### Known issues

- Sorting by 'No.' doesn't work as expected for some reason. Tried to solve it in different quick ways, but failed, so it's currently a live bug.
- IMO: Data fetching should be solved in a more robust way, with Zustand's persistence it's fine for the exercise.

## How to run

You can either run the project locally, or you can check it out deployed on [evinced-vdz.netlify.app](https://evinced-vdz.netlify.app/).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

