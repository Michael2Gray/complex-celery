import { render, screen } from '@testing-library/react';

import { StationStatus } from '../../enums';
import { StationStatusLabel } from './station-status-label.component';

describe('StationStatusLabel', () => {
  test.each([[StationStatus.CLOSED], [StationStatus.OPEN]])(
    'renders correctly for the given status %p',
    (status) => {
      render(<StationStatusLabel status={status} />);

      expect(screen.getByText(status)).toBeInTheDocument();
    }
  );
});
