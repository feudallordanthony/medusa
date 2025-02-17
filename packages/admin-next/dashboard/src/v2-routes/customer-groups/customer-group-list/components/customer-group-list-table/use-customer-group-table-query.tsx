import { useQueryParams } from "../../../../../hooks/use-query-params"

type UseCustomerGroupTableQueryProps = {
  prefix?: string
  pageSize?: number
}

export const useCustomerGroupTableQuery = ({
  prefix,
  pageSize = 20,
}: UseCustomerGroupTableQueryProps) => {
  const queryObject = useQueryParams(
    ["offset", "q", "order", "created_at", "updated_at"],
    prefix
  )

  const { offset, created_at, updated_at, q, order } = queryObject

  const searchParams = {
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    order,
    created_at: created_at ? JSON.parse(created_at) : undefined,
    updated_at: updated_at ? JSON.parse(updated_at) : undefined,
    q,
  }

  return {
    searchParams,
    raw: queryObject,
  }
}
