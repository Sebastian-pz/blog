import FeaturePost from "./FeaturePost/FeaturePost";

export default function FeaturePosts() {
  return (
    <div className="rounded-lg border bg-muted p-6">
      <h2 className="text-2xl font-bold">Featured posts</h2>
      <div className="mt-4 space-y-4">
        <FeaturePost />
        <FeaturePost />
        <FeaturePost />
      </div>
    </div>
  );
}
