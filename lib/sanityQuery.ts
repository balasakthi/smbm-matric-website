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
    previewMessage,
    fullMessage,
    photo,
    slug{
      current,
    },
}`;
const PRINCIPAL_MESSAGE_QUERY = `
*[_type == "managementMessage" && role == "principal"][0] {
    name,
    designation,
    highlightQuote,
    previewMessage,
    fullMessage,
    photo,
    slug{
      current,
    },
}`;
const VICE_PRINCIPAL_MESSAGE_QUERY = `
*[_type == "managementMessage" && role == "vicePrincipal"][0] {
    name,
    designation,
    highlightQuote,
    previewMessage,
    fullMessage,
    photo,
    slug{
      current,
    },
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
    contactInfo->{
      officeHours[]{
        days,
        timing
      },
      phones,
      emails,
      address
    }
  },
}
`;

const ABOUT_PAGE_QUERY = `
*[_type == "aboutPage"][0]{
  hero{
    title,
    subtitle,
    label,
    backgroundImage{
      asset,
      alt
    },
  },

  overview{
    title,
    content,
    image{
      asset,
      alt
    }
  },

  missionVision{
    title,
    description,
    mission,
    vision,
    coreValues,
    quote
  },

  heritage{
    label,
    title,
    description,
    
    aphorism,
    leadershipMission,

    leadership[]{
      name,
      position
    },
    coreFocus{
      title,
      content
    },
    socialVision{
      title,
      content
    },
    schools[]{
      year,
      name,
      type
    },
    motto,
  },

  studentLife{
    title,
    description,
    items[]{
      title,
      badge,
      description,
      image{
        asset,
        alt
      }
    }
  },
}
`;

const ACADEMICS_PAGE_QUERY = `
*[_type == "academicsPage"][0]{
  hero{
    title,
    subtitle,
    label,
    backgroundImage{
      asset,
      alt
    },
  },

  overview{
    title,
    content,
  },

  learningApproach{
    title,
    subtitle,
    points[]{
      title,
      description,
      icon,
    },
  },
  
  kindergarten{
    title,
    content,
  },
  
  curriculum{
    title,
    subtitle,
    levels[]{
      level,
      type,
      description,
      subjects,
      streams[]{
        streamName,
        coreSubjects,
        groupOptions,
        languages
      }
    }
  },

  teachingMethodology{
    title,
    description,
    methodologies[],
    image,
  }
 }
`;

const CONTACT_PAGE_QUERY = `
*[_type == "contactPage"][0]{
  hero{
    title,
    subtitle,
    label,
    backgroundImage{
      asset,
      alt
    }
  }, 
  contactSection{
    title,
    subtitle,
    contactInfo->{
      officeHours[]{
        days,
        timing
      },
      phones,
      emails,
      address
    }
  },
  formSection{
    title,
    subtitle,
    mapUrl,
    formTitle,
  },
  faqSection{
    title,
    subtitle,
    faq[]{
      question,
      answer
    }
  },
}
`;
const HOME_PAGE_QUERY = `
*[_type == "homePage"][0]{
  hero{
    title,
    established,
    schoolMotto,
    subtitle,
    admissionText,
    admissionOpen,
    backgroundImage{
      asset,
      alt
    }
  },

  quickHighlights[] | order(order asc){
    title,
    description,
    icon,
    order
  },

  schoolIntroduction{
    title,
    subtitle,
    description,
    aboutImage{
      asset,
      alt
    },
    buttonText,
    buttonLink
  },

  managementMessage[]->{
    role,
    name,
    designation,
    highlightQuote,
    previewMessage,
    photo{
      asset,
      alt
    },
    order,
    slug{
      current
    }
  } | order(order asc),

  whyChooseSMBM{
    title,
    subtitle,
    reasons
  },

  statsBlock->{
    stats[] | order(order asc){
      value,
      suffix,
      label,
      order
    }
  },

  academicLevels{
    title,
    subtitle,
    levels[]{
      icon,
      levelName,
      shortDescription
    },
    buttonText,
    buttonLink
  },

  academicResults[]->{
    title,
    subtitle,
    year,
    isCurrent,
    resultPoster{
      asset,
      alt
    },
    topStudents[]{
      studentName,
      photo{
        asset,
        alt
      },
      className,
      group,
      centum,
      score,
      achievement
    }
  } | order(year desc),

  infrastructureHighlights{
    title,
    subtitle,
    highlights[]{
      title,
      description,
      image{
        asset,
        alt
      }
    }
  },

  testimonials{
    title,
    subtitle,
    testimonialsList[]->{
      name,
      role,
      organization,
      batch,
      quote,
      photo{
        asset,
        alt
      },
    },
  },

  ctaBlock->{
    title,
    supportLine
  }
}
`;

export {
  ABOUT_PAGE_QUERY,
  ACADEMICS_LEVEL_QUERY,
  ACADEMICS_PAGE_QUERY,
  ACADEMIC_RESULT_QUERY,
  ADMISSION_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
  CORRESPONDENT_MESSAGE_QUERY,
  CTA_QUERY,
  HERO_QUERY,
  HIGHLIGHTS_QUERY,
  HOME_PAGE_QUERY,
  INFRASTRUCTURE_QUERY,
  PRINCIPAL_MESSAGE_QUERY,
  SCHOOL_INTRO_QUERY,
  STATS_QUERY,
  TESTIMONIAL_QUERY,
  VICE_PRINCIPAL_MESSAGE_QUERY,
  WHY_CHOOSE_SMBM_QUERY,
};
