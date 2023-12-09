import { useState } from 'react';

import DefaultModal from '../../modal';

import Form from './form';
import TopRateProgress from './top-rate-progress';
import Advanced from './popups/advance';
import Done from './popups/done';

const MortgageCal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TopRateProgress />
      <Form setOpen={setOpen} />

      <DefaultModal open={open === 'form'} size="max-w-[378px]" toggle={setOpen}>
        <Advanced setOpen={setOpen} />
      </DefaultModal>

      <DefaultModal open={open === 'done'} size="max-w-[274px]" toggle={setOpen}>
        <Done setOpen={setOpen} />
      </DefaultModal>
    </div>
  );
};

export default MortgageCal;
