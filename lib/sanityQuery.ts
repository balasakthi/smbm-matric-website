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
      title,
      description
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

  ctaBlock{
    title,
    supportLine,
    buttonLink,
    buttonText,
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
    subtitle,
    content,
    image{
      asset,
      alt
    }
  },

  missionVision{
    title,
    subtitle,
    mission,
    vision,
    coreValues,
    missionStatement,
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

  heritage{
    label,
    title,
    subtitle,
    image{
      asset,
      alt
    },
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
    subtitle,
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

  statsBlock->{
    stats[] | order(order asc){
      value,
      suffix,
      label,
      order
    }
  },

  ctaBlock{
    title,
    supportLine,
    buttonLink,
    buttonText,
  }

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
    subtitle,
    content,
    image{
      asset,
      alt
    },
    highlights,
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
    subtitle, 
    sections[]{
      title,
      description,
    },
    image{
      asset,
      alt
    }
  },

  curriculum{
  title,
  subtitle,
  groups[]{
    _type,

    _type == "kgGroup" => {
      groupName,
      icon,
      description,
      type,
      categories[]{
        title,
        icon,
        subjects
      }
    },

    _type == "standardGroup" => {
      groupName, 
      icon,
      description,
      type,
      categories[]{
        title,
        icon,
        subjects
      }
    },

    _type == "higherSecondaryGroup" => {
      groupName,
      icon,  
      description,
      type,
      streams[]{
        streamName,
        icon,
        languages,
        coreSubjects,
        groupOptions
      }
    }
  }
},
  
  teachingMethodology{
    title,
    subtitle,
    description,
    image{
      asset,
      alt
    },
    content[]{
      title,
      icon,
      description,
    }
    
  },
  
  ctaBlock{
    title,
    supportLine,
    buttonLink,
    buttonText,
  }

}
`;

const ADMISSION_PAGE_QUERY = `
*[_type == "admissionPage"][0] {
  hero{
    title,
    subtitle,
    label,
    backgroundImage{
      asset,
      alt
    }
  },
  overview{
    title,
    subtitle,
    content,
    image{
      asset,
      alt
    }
  },
  classSections{
    title,
    subtitle,
    classes[] {
      icon,
      title,
      subtitle,
      description
    },
  },
  admissionProcess{
    title,
    subtitle,
    steps[] {
      title,
      description
    },
  },
  requiredDocuments{
    title,
    subtitle,
    documents[] {
      icon,
      label
    },
  },
  admissionGuidelines{
    title,
    subtitle,
    guidelines,
  },
  contactSection{
    title,
    subtitle,
    contactInfo -> {
      officeHours[] {
        days,
        timing
      },
      phones,
      emails,
      address
    }
  }
}`;

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
  contactForm{
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
  
  ctaBlock{
    title,
    supportLine,
    buttonLink,
    buttonText,
  },

}
`;

const CAREERS_PAGE_QUERY = `
*[_type == "careersPage"][0]{
    hero{
      title,
      subtitle,
      label,
      backgroundImage{
        asset,
        alt
      }
    },
    whyJoinSMBM{
      label,
      title,
      subtitle,
      highlights[]{
        icon,
        title,
        description,
      },
    },
    
    applicationForm{
      label,
      title,
      subtitle,
      formTitle,
      image{
        asset,
        alt
      }
    },
  
    ctaBlock{
      title,
      supportLine,
      buttonLink,
      buttonText,
    },
  }
`;

export {
  ABOUT_PAGE_QUERY,
  ACADEMICS_PAGE_QUERY,
  ADMISSION_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
  CAREERS_PAGE_QUERY,
  CORRESPONDENT_MESSAGE_QUERY,
  HOME_PAGE_QUERY,
  PRINCIPAL_MESSAGE_QUERY,
  VICE_PRINCIPAL_MESSAGE_QUERY,
};
