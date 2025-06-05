interface Props {
  message?: string;
}

export const ErrorData = ({ message = 'Error getting data' }: Props) => {
  return (
    <div className="text-center text-2xl font-semibold block">
      <span>❌ { message }</span>
    </div>
  )
}
