import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ImageGallery, ImageDetails } from '@views';

export const RoutesHandler: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageGallery />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </Router>
  );
};
