import MainLayout from "../../components/layout/MainLayout";

import SearchBar from "../../components/jobs/SearchBar";
import FilterBar from "../../components/jobs/FilterBar";
import JobCard from "../../components/jobs/JobCard";

function Jobs() {
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-blue-600">
        💼 Job Explorer
      </h1>

      <p className="text-gray-500 mt-2">
        Find the best opportunities for your career.
      </p>

      <div className="mt-8">

        <SearchBar />

        <FilterBar />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        <JobCard
          company="Google"
          role="Frontend Developer"
          location="Bangalore"
          type="Full Time"
        />

        <JobCard
          company="Microsoft"
          role="Software Engineer"
          location="Hyderabad"
          type="Full Time"
        />

        <JobCard
          company="Amazon"
          role="Full Stack Developer"
          location="Remote"
          type="Internship"
        />

        <JobCard
          company="Infosys"
          role="React Developer"
          location="Hyderabad"
          type="Internship"
        />

      </div>

    </MainLayout>
  );
}

export default Jobs;