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
  };
}
