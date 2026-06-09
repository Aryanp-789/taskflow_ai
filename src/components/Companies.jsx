const Companies = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Adobe",
    "Spotify",
    "Slack",
    "Notion",
  ];

  return (
    <section className="py-20">
      <p className="text-center text-slate-500 mb-10 uppercase tracking-wider">
        Trusted by innovative teams worldwide
      </p>

      <div className="flex flex-wrap justify-center gap-10 text-slate-400 text-xl font-semibold">
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </section>
  );
};

export default Companies;