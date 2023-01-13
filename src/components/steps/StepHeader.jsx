export default function StepHeader({ title, description }) {
  return (
    <>
      <h1 className=" font-bold text-xl lg:text-2xl text-blue-marine ">{title}</h1>
      <p className="text-gray-cool text-sm lg:text-lg">{description}</p>
    </>
  );
}
