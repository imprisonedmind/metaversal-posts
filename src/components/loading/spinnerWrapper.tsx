import Spinner from "@/components/loading/spinner";

export default function SpinnerWrapper() {
  return (
    <div className={`flex h-full w-full items-center justify-center`}>
      <Spinner />
    </div>
  );
}
