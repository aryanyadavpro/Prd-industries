-- Update product images to use real generated images
update products set images = ARRAY['/images/spiral-wound-gasket.png']
  where slug = 'spiral-wound-gasket';

update products set images = ARRAY['/images/ring-joint-gasket.png']
  where slug = 'ring-joint-gasket';

update products set images = ARRAY['/images/hydraulic-rod-seal.png']
  where slug = 'hydraulic-rod-seal';

update products set images = ARRAY['/images/mechanical-face-seal.png']
  where slug = 'mechanical-face-seal';

update products set images = ARRAY['/images/weld-neck-flange.png']
  where slug = 'weld-neck-flange';

update products set images = ARRAY['/images/blind-flange.png']
  where slug = 'blind-flange';

update products set images = ARRAY['/images/nitrile-o-ring.png']
  where slug = 'nitrile-o-ring';

update products set images = ARRAY['/images/viton-o-ring.png']
  where slug = 'viton-o-ring';
