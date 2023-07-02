import {SCHEDULE} from '../core/data';
import { ScheduleType } from '../type/ScheduleType';
import {atom} from 'recoil';

export const scheduleState = atom<ScheduleType[]>({
    key: 'scheduleState',
    default: SCHEDULE,
})