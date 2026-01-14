const Stats = () => {
  return (
    <div className="bg-accent flex items-center justify-center">
      <div className="container mx-auto py-12 text-center text-accent-foreground">
        <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-center">
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold">45+</span>
            <p className="mt-6 text-lg">Years of Legacy</p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold">1500+</span>
            <p className="mt-6 text-lg">Students</p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold">80+</span>
            <p className="mt-6 text-lg">Qualified Staffs</p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold">K.G. - XII</span>
            <p className="mt-6 text-lg">Complete Education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
