import { FaArrowRight } from "react-icons/fa";
import { cn } from "/src/lib/utils";

function BentoGrid({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function BentoCard({
  name,
  className = "",
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      {...props}
    >
      <div>{background}</div>
      <div className="p-4">
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
          <Icon className="h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75 text-white" />
          <h3 className="text-xl font-semibold text-white">
            {name}
          </h3>
          <p className="max-w-lg text-white">{description}</p>
        </div>

        <div
          className={cn(
            "lg:hidden flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
          )}
        >
          <a
            href={href}
            className="pointer-events-auto p-0 underline text-sm font-medium flex items-center gap-2"
          >
            {cta}
            <FaArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>
      </div>

      <div
        className={cn(
          "hidden lg:flex absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <a
          href={href}
          className="pointer-events-auto p-0 underline text-sm font-medium flex items-center gap-2 text-white"
        >
          {cta}
          <FaArrowRight className="h-4 w-4 rtl:rotate-180 text-white" />
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
}

export { BentoCard, BentoGrid };