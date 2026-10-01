import PageLayout from "../components/layout/PageLayout";
import ComingSoon from "../components/common/ComingSoon";

// Shown for any address that does not exist
function NotFound() {
  return (
    <PageLayout>
      <div className="pt-10">
        <ComingSoon name="This" />
      </div>
    </PageLayout>
  );
}

export default NotFound;
