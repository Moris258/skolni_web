import { document } from '@keystone-6/fields-document';

export default document({
  formatting: {
    alignment: undefined,
    blockTypes: undefined,
    headingLevels: true,
    listTypes: true,
    softBreaks: true,
    inlineMarks: {
      bold: true,
      italic: true,
      strikethrough: true,
      underline: true,
    },
  },
  dividers: true,
  links: true,
});
