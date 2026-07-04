import React from "react";
export interface Project {
  title: string;
  image: string;
  href: string;
  description: string;
  techStack: {
    name: string;
    icon: React.ComponentType<any>;
  }[];
}
