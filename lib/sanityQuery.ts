const options = { next: { revalidate: 30 } };

const heroQuery = `
*[_type == "heroSection"][0]{
  title,
  subtitle,
  description,
  trustLine,
  admissionOpen,
  admissionAction,
  exploreAction,
  contactAction,
  slides[]{
    asset->{url}, 
    alt
  },
  highlights[] {
    icon,
    text,
  }
}
`;

const actionsQuery = `
*[_type == "actions"][0]{
  title,
  admissionOpen,
  admissionAction,
  exploreAction,
  contactAction,
}
`;

const aboutQuery = `
*[_type == "aboutSection"][0]{
  title,
  description,
  knowMoreAction{
    label,
    url
  },
  image{
    asset->{url},
    alt
  }
}`;

const academicsQuery = `
*[_type == "academicSection"][0]{
  title,
  description,
  features[]{
    title,
    subtitle,
    description,
    icon
  },
  viewCurriculumAction{
    label,
    url
  },
}
`;

const statsQuery = `
*[_type == "statsSection"]{
  label,
  value,
  suffix,
}`;

const whyChooseQuery = `
*[_type == "whyChooseSection"][0]{
  title,
  description,
  features[]{
    title,
    description,
    icon
  },
  exploreCampusAction{
    label,
    href
  },
  image{
    asset->{url},
    alt
  }
}
`;

const updatesQuery = `
*[_type == "updatesSection"][0]{
  title,
  description,
  announcements[]{
    title,
    description,
    icon
  },
  activities[]{
    title,
    description,
    icon
  },
  contactAction{
    label,
    href
  },
}
`;

const messageQuery = `
*[_type == "messageSection"][0]{
  title,
  description,
  image{
    asset->{url},
    alt
  },
  quote,
  name,
  designation,
  message,
  readMoreAction{
    label,
    href
  }
}
`;

const callToActionQuery = `
*[_type == "callToActionSection"][0]{
  title,
  description,
}
`;

export {
  options,
  heroQuery,
  actionsQuery,
  aboutQuery,
  academicsQuery,
  statsQuery,
  whyChooseQuery,
  updatesQuery,
  messageQuery,
  callToActionQuery,
};
