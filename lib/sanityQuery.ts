const HERO_QUERY = `
*[_type == "homeHero"][0]{
  title,
  subtitle,
  established,
  schoolMotto,
  admissionText,
  admissionOpen,
  backgroundImage,
}
`;

const HIGHLIGHTS_QUERY = `
*[_type == "homeQuickHighlight"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }`;

const SCHOOL_INTRO_QUERY = `
*[_type == "schoolIntroduction"][0]{
    title,
    subtitle,
    description,
    aboutImage,
    buttonText,
    buttonLink
  }`;

const ACADEMICS_LEVEL_QUERY = `
*[_type == "academicLevel"][0]{
    title,
    levels,
    buttonText,
    buttonLink
 }`;

const INFRASTRUCTURE_QUERY = `
*[_type == "infrastructureHighlight"][0]{
    title,
    intro,
    highlights
 }`;

const CTA_QUERY = `
*[_type == "ctaBlock"][0]{
    title,
    supportLine,
}`;

const CORRESPONDENT_MESSAGE_QUERY = `
*[_type == "managementMessage" && role == "correspondent"][0] {
    name,
    designation,
    highlightQuote,
    message,
    photo
}`;

const WHY_CHOOSE_SMBM_QUERY = `
*[_type == "whyChooseSMBM"][0] {
    title,
    intro,
    reasons
}`;

const ACADEMIC_RESULT_QUERY = `
*[_type == "academicResult" && isCurrent == true][0]{
  title,
  intro,
  year,
  resultPoster,
  "class10Students": topStudents[className == "Class 10"] | order(score desc){
    studentName,
    className,
    group,
    score,
    centum,
    achievement,
    photo
  },
  "class12Students": topStudents[className == "Class 12"] | order(score desc){
    studentName,
    className,
    group,
    score,
    centum,
    achievement,
    photo
  }
}`;

const TESTIMONIAL_QUERY = `
*[_type == "testimonial" && featured == true] | order(__createdAt desc) {
    _id,
    name, 
    role,
    organization,
    quote,
    photo
  }`;

const STATS_QUERY = `
*[_type == "statsSection"][0]{
    _id,
    title,
    stats[]{
      value,
      suffix,
      label
    }
  }`;

const ADMISSION_PAGE_QUERY = `
*[_type == "admissionPage"][0]{
  heroTitle,
  heroSubtitle,
  backgroundImage{
    asset,
    alt
  },

  overviewTitle,
  overviewContent,

  classesTitle,
  classesIntro,
  classes[]{
    icon,
    title,
    subtitle,
    description
  },

  processTitle,
  processIntro,
  processSteps[]{
    title,
    description
  },

  documentsTitle,
  documentsIntro,
  documents[]{
    icon,
    label
  },

  guidelinesTitle,
  guidelinesIntro,
  guidelines,

  contactSection{
    title,
    subtitle,

    officeHours[]{
      days,
      timing
    },

    phones,
    emails,
    address
  }
}
`;
export {
  HERO_QUERY,
  HIGHLIGHTS_QUERY,
  SCHOOL_INTRO_QUERY,
  ACADEMICS_LEVEL_QUERY,
  INFRASTRUCTURE_QUERY,
  CTA_QUERY,
  CORRESPONDENT_MESSAGE_QUERY,
  WHY_CHOOSE_SMBM_QUERY,
  ACADEMIC_RESULT_QUERY,
  TESTIMONIAL_QUERY,
  STATS_QUERY,
  ADMISSION_PAGE_QUERY,
};
