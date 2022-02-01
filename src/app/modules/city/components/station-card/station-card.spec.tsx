import { render, screen } from '@testing-library/react';

import { STATIONS } from '../../../../../api-mocks/fixtures';
import { StationCard } from './station-card.component';

const station = STATIONS[0];

describe('StationCard', () => {
  test('renders the station details', () => {
    render(<StationCard station={{ ...station, distanceAway: 1 }} />);

    expect(screen.getByRole('heading', { name: station.name.toLowerCase() }));
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('18')).toBeInTheDocument();
    expect(screen.getByText('Sat, 1 Aug 2020 13:09:03')).toBeInTheDocument();
    expect(screen.getByText('OPEN')).toBeInTheDocument();
  });

  test('does not render undefiend station details', () => {
    render(
      <StationCard
        station={{ ...station, distanceAway: 1, mainStands: null }}
      />
    );

    expect(screen.getByRole('heading', { name: station.name.toLowerCase() }));
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.queryByText('18')).not.toBeInTheDocument();
    expect(screen.getByText('Sat, 1 Aug 2020 13:09:03')).toBeInTheDocument();
    expect(screen.getByText('OPEN')).toBeInTheDocument();
  });
});
