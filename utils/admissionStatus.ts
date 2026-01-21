export function getAdmissionActions() {
  const month = new Date().getMonth() + 1; // Jan = 1

  const isAdmissionOpen = month >= 1 && month <= 5;

  if (isAdmissionOpen) {
    return {
      primary: {
        label: "Admission Enquiry",
        href: "/admissions/enquiry",
      },
      secondary: {
        label: "Explore Our School",
        href: "/campus-life",
      },
      title: "Begin Your Child’s Journey at SMBM",
      description:
        "Admissions are now open for the upcoming academic year. Join a school that nurtures academic excellence, discipline, and strong values.",
    };
  }

  return {
    primary: {
      label: "Explore Our School",
      href: "/campus-life",
    },
    secondary: {
      label: "Contact Us",
      href: "/contact",
    },
    title: "Shaping Confident Learners for the Future",
    description:
      "At SMBM Matriculation Higher Secondary School, we focus on holistic development, strong moral values, and academic excellence to prepare students for life.",
  };
}
