import React from "react";

const Pagination = ({
    pageIndex,
    pageCount,
    pageSize,
    onChangePageSize,
    onChangeFirstPage,
    onChangeNextPage,
    onChangePreviousPage,
    onChangePageIndex,
    canNextPage,
    canPreviousPage
}) => {

    const getPaginationValues = (page, total) => {
        if (total <= 7) {
            if (total === 0) {
                return [1]
            }

            return Array.from({length: total}, (_, i) => i+1)
        }
        // 1 2 3 4 5 ... 9
        if (page <= 4) {
            return [1, 2, 3, 4, 5, 0, total]
        }
        // 1 ... 4 5 6 ... 9
        if (page >= 5 && page < total-3) {
            return [1, 0, page-1, page, page+1, 0, total]
        }
        // 1 ... 5 6 7 8 9
        if (page >= total-3) {
            return [1, 0, total-4, total-3, total-2, total-1, total]
        }
        
        return null
    }

    return (
        <div className="flex items-center justify-center mt-4 mb-4 space-x-4">
            <div className="flex items-center">
                <button
                    onClick={onChangeFirstPage}
                    disabled={!canPreviousPage}
                    className="px-3 py-2 rounded-l-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    &laquo;
                </button>
                <button
                    onClick={onChangePreviousPage}
                    disabled={!canPreviousPage}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    &lsaquo;
                </button>

                <div className="flex items-center">
                    {/* Render page numbers */}
                    {getPaginationValues(pageIndex+1, pageCount).map((value, index) => {
                        if (value === 0) {
                            return (
                                <span key={`ellipsis-${index}`} className="px-3 py-2 bg-gray-200">
                                    ...
                                </span>
                            );
                        }

                        return (
                            <button
                                key={value}
                                onClick={() => onChangePageIndex(value - 1)}
                                className={`px-3 py-2 ${
                                    pageIndex === value - 1
                                        ? 'bg-gtgold text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                            >
                                {value}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={onChangeNextPage}
                    disabled={!canNextPage}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    &rsaquo;
                </button>
                <button
                    onClick={() => onChangePageIndex(pageCount - 1)}
                    disabled={!canNextPage}
                    className="px-3 py-2 rounded-r-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    &raquo;
                </button>
            </div>

            <span className="flex items-center gap-1">
                Go to page:
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    min={1}
                    max={pageCount}
                    onChange={e => {
                        let page = e.target.value ? Number(e.target.value) - 1 : 0;
                        page = Math.max(0, Math.min(page, pageCount - 1));
                        onChangePageIndex(page);
                    }}
                    className="border p-1 rounded w-16"
                />
            </span>

            <select
                value={pageSize}
                onChange={(e) => {
                    onChangePageSize(Number(e.target.value));
                }}
                className="bg-gray-200 rounded-md"
            >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Pagination;