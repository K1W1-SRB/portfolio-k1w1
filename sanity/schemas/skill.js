export default {
  name: "skill",
  title: "SkillS",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of the skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of the skill from 0 to 100",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "Image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
