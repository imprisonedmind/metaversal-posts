import Spinner from "@/components/loading/spinner";

export default function SpinnerWrapper() {
  return (
    <div className={`flex h-[500px] w-[100svw] items-center justify-center`}>
      <Spinner />
    </div>
  );
}
