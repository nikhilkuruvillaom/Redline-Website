import Group from "../imports/Group";

interface NavbarProps {
  onLogoClick?: () => void;
}

export function Navbar({ onLogoClick }: NavbarProps) {
  return (
    <nav className="w-full bg-white border-b border-border flex-shrink-0 z-40">
      <div className="px-8 py-6">
        <div className="flex items-center">
          <button
            onClick={onLogoClick}
            className="flex items-center cursor-pointer transition-opacity duration-300 hover:opacity-70"
          >
            <div style={{ width: "120px", height: "40px" }}>
              <Group />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
