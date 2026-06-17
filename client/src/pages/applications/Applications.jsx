import MainLayout from "../../components/layout/MainLayout";
import AddApplication from "../../components/applications/AddApplication";
import ApplicationList from "../../components/applications/ApplicationList";

function Applications() {
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-blue-600">
        📋 Job Application Tracker
      </h1>

      <p className="text-gray-500 mt-2">
        Track all your placement applications in one place.
      </p>

      <AddApplication />

      <ApplicationList />

    </MainLayout>
  );
}

export default Applications;