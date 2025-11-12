import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | My Music Academy",
  description: "Explore our wide range of professional music courses and programs.",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}