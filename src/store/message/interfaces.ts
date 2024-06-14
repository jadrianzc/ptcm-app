import { MessageInstance } from 'antd/es/message/interface';

export interface IMessageStore {
	// State
	message: MessageInstance | null;

	// Actions
	setMessageApi: (state: MessageInstance) => void;
}
