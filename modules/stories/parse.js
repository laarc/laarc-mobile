export const story = data => ({
  ...data,
  id: String(data.id),
});

export const stories = data => data
  .filter(d => !!d.title)
  .reduce((obj, d) => ({
    ...obj,
    [String(d.id)]: story(d),
  }), {});
