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

  "managementMember": *[
    _type == "leadershipMember" &&
    category == "management" &&
    role == "correspondent"
    ]| order(order asc)[0] {
      _id,
      name,
      designation,
      role,
      featured,
      highlightQuote,
      previewMessage,
      slug,
    photo{
      asset,
      alt
    }
  },

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

  "academicResults": academicResults[]->{
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
  },

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

 "managementMember": *[
    _type == "leadershipMember" &&
    category == "academicLeadership" &&
    role == "principal"
    ]| order(order asc)[0] {
      _id,
      name,
      designation,
      role,
      featured,
      highlightQuote,
      previewMessage,
      slug,
    photo{
      asset,
      alt
    }
  },

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

const GALLERY_PAGE_QUERY = `
*[_type == "galleryPage"][0]{
  hero{
    title,
    subtitle,
    label,
    backgroundImage{
      asset->{
        _id,
        url
      },
      alt
    }
  },

  gallery{
    label,
    title,
    subtitle,
  },

  ctaBlock{
    title,
    supportLine,
    buttonLink,
    buttonText,
  },

  "categories": *[_type == "galleryCategory"] | order(order asc){
    _id,
    title,
    order,

    "galleries": *[_type == "gallery" && galleryCategory._ref == ^._id] | order(order asc){
      _id,
      title,

      thumbnail{
        asset->{
          _id,
          url
        },
        alt
      },

      "previewImages": images[0...6]{
        asset->{
          _id,
          url,
          metadata{
            dimensions{
              width,
              height,
            }
          }
        },
          
        alt
      },

      "imageCount": count(images)
    }
  }
}
`;

const LEADERSHIP_PAGE_QUERY = `
*[_type == "leadershipPage"][0]{
  hero{
    title,
    subtitle,
    label,
    backgroundImage{
      asset->{
        _id,
        url
      },
      alt
    }
  },


  managementSection{
    title,
    subtitle,
    label,
  },

  academicSection{
    title,
    subtitle,
    label,
  },

  ctaBlock{
    title,
    supportLine,
    buttonLink,
    buttonText,
  },

  "managementMembers": *[
    _type == "leadershipMember" &&
    category == "management"
  ] | order(order asc) {
    _id,
    name,
    designation,
    role,
    featured,
    highlightQuote,
    previewMessage,
    slug,

    photo{
      asset->{
        _id,
        url
      },
      alt
    }
  },

  "academicMembers": *[
    _type == "leadershipMember" &&
    category == "academicLeadership"
  ] | order(order asc) {
    _id,
    name,
    designation,
    role,
    featured,
    highlightQuote,
    previewMessage,
    slug,

    photo{
      asset->{
        _id,
        url
      },
      alt
    }
  }
}
`;

const LEADERSHIP_MEMBER_QUERY = `
{
  "member": *[
    _type == "leadershipMember" &&
    slug.current == $slug
  ][0]{
    _id,
    name,
    designation,
    role,
    highlightQuote,
    fullMessage,
    heroSubtitle,
    
    photo{
      asset->{
        _id,
        url
      },
      alt
    },

    slug{
      current
    }
  },

  "leadershipPage": *[
    _type == "leadershipPage"
  ][0]{
    hero{
      backgroundImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }
}
`;

const LEADERSHIP_SLUGS_QUERY = `
*[
  _type == "leadershipMember" &&
  defined(slug.current)
]{
  "slug": slug.current
}
`;

const RULES_AND_REGULATIONS_PAGE_QUERY = `
*[_type == "rulesAndRegulations"][0]{
  hero{
    label,
    title,
    subtitle,
    backgroundImage{
      asset->{
        _id,
        url
      },
      alt
    }
  },

  discipline{
    label,
    title,
    subtitle,

    rules[]{
      title,
      description,
      icon
    }
  },

  uniformPolicy{
    label,
    title,
    subtitle,

    guidelines,

    uniformCategories[]{
      classGroup,
      boysUniform,
      girlsUniform
    },

    specialUniformNote
  },

  prayerAndPledge{
    label,
    title,
    subtitle,

    morningPrayer,
    eveningPrayer,
    loyaltyPledge
  }
}
`;

export {
  ABOUT_PAGE_QUERY,
  ACADEMICS_PAGE_QUERY,
  ADMISSION_PAGE_QUERY,
  CAREERS_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
  GALLERY_PAGE_QUERY,
  HOME_PAGE_QUERY,
  LEADERSHIP_MEMBER_QUERY,
  LEADERSHIP_PAGE_QUERY,
  LEADERSHIP_SLUGS_QUERY,
  RULES_AND_REGULATIONS_PAGE_QUERY,
};
