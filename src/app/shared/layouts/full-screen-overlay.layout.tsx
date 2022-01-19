type FullScreenOverlayProps = {
  children?: React.ReactNode;
};

export const FullScreenOverlay = ({ children }: FullScreenOverlayProps) => (
  <div
    data-testid="full-screen-overlay"
    className="absolute inset-0 flex items-center justify-center p-2"
  >
    {children}
  </div>
);
