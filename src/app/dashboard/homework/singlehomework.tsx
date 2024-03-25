interface SingleHomeworkProps {
  subject: string;
  start_date: string;
  end_date: string;
}

export default function SingleHomework(props: SingleHomeworkProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="grid items-start sm:grid-cols-2">
        <div className="font-medium">{props.subject}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          开始时间: {props.start_date}
        </div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        结束时间: {props.end_date}
      </div>
    </div>
  );
}
