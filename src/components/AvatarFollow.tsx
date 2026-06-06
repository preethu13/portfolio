import avatar from "@/assets/avatar.png";

export function AvatarFollow() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md select-none">
      <div className="absolute inset-2 -z-10 animate-blob bg-[var(--sun)] ink-border shadow-comic-lg" />
      <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 animate-spin-slow rounded-full halftone opacity-60" />
      <img
        src={avatar}
        alt="Preetham cartoon avatar"
        draggable={false}
        className="relative h-full w-full object-contain drop-shadow-[6px_6px_0_var(--ink)]"
      />
    </div>
  );
}
