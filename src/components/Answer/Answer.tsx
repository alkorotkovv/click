import './Answer.scss';
import { dataObject } from '../../interfaces/interfaces';
import Box from '@mui/material/Box';
import { SvgIcon, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Answer = ({ loading, data, error }: dataObject) => {

  return (
    <Box sx={{ display: "flex", gap: 1, flexDirection: 'row' }}>
      <SvgIcon component={WarningAmberIcon} sx={{ color: "#FFBF00" }} />
      <Typography variant="subtitle1" sx={{ color: "#FFBF00", fontWeight: 700 }}>
        {error
          ? error
          : (!data?.ok && !loading)
            ? data?.error_ui
            : (loading)
              ? ' Идет загрузка данных с сервера '
              : 'По версии сервера ' + data?.count + ' раз'}
      </Typography>
    </Box>
  );
}

export default Answer;
