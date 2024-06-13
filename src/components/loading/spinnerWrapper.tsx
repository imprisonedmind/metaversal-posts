import Spinner from "@/components/loading/spinner";

export default function SpinnerWrapper() {
  return (
    <div className={`flex h-[500px] w-full items-center justify-center`}>
      <Spinner />
    </div>
  );
}
