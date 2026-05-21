import Image from "next/image"

export default function LMSCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Case Study
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold">
            NextScript LMS
          </h1>

          <p className="mt-6 text-xl text-muted-foreground">
            A parent-centric Learning Management System designed to help families
            discover courses, manage enrollments, track student progress, and
            communicate effectively with tutors.
          </p>
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden border border-border">
          <Image
            src="/My projects/LMS-nS.png"
            alt="NextScript LMS"
            width={1600}
            height={1792}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Project Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground">Role</p>
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
            </div>

            <div>
              <p className="text-muted-foreground">Duration</p>
              <h3 className="text-xl font-semibold">6 Weeks</h3>
            </div>

            <div>
              <p className="text-muted-foreground">Platform</p>
              <h3 className="text-xl font-semibold">Responsive Web Application</h3>
            </div>

            <div>
              <p className="text-muted-foreground">Team</p>
              <h3 className="text-xl font-semibold">
                2 Designers + Developers
              </h3>
            </div>

            <div>
              <p className="text-muted-foreground">Tools</p>
              <h3 className="text-xl font-semibold">Figma</h3>
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              NextScript LMS was designed to provide parents with complete
              visibility into their child's learning journey. The platform
              enables course discovery, enrollment approvals, academic
              monitoring, tutor feedback management, and family scheduling
              through a unified experience.
            </p>
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Problem Statement
        </h2>

        <div className="rounded-3xl border border-border p-8">
          <p className="text-xl leading-8">
            Parents often struggle to track their child's learning progress
            because course enrollment, academic performance, tutor feedback,
            and schedules are distributed across multiple disconnected systems.
          </p>
        </div>
      </section>

      {/* USER FLOW */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">
          User Flow
        </h2>

        <div className="rounded-3xl border border-border p-8">
          <p className="text-lg">
            Sign Up → Browse Courses → Buy Credits → Add Child →
            Request Enrollment → Parent Approval →
            Track Performance → Review Tutor Feedback
          </p>
        </div>
      </section>

    </main>
  )
}