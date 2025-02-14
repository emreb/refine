import { renderHook } from "@testing-library/react-hooks";

import { MockJSONServer, TestWrapper } from "@test";

import { useCreateMany } from "./useCreateMany";

describe("useCreateMany Hook", () => {
    it("should work with rest json server", async () => {
        const { result, waitForNextUpdate, waitFor } = renderHook(
            () => useCreateMany(),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        result.current.mutate({ resource: "posts", values: [{ id: 1 }] });

        await waitForNextUpdate();

        await waitFor(() => {
            return result.current.isSuccess;
        });

        const { status, data } = result.current;

        expect(status).toBe("success");
        expect(data?.data[0].slug).toBe("ut-ad-et");
        expect(data?.data[1].slug).toBe("consequatur-molestiae-rerum");
    });

    describe("usePublish", () => {
        it("publish live event on success", async () => {
            const onPublishMock = jest.fn();

            const { result, waitForNextUpdate, waitFor } = renderHook(
                () => useCreateMany(),
                {
                    wrapper: TestWrapper({
                        dataProvider: MockJSONServer,
                        resources: [{ name: "posts" }],
                        liveProvider: {
                            unsubscribe: jest.fn(),
                            subscribe: jest.fn(),
                            publish: onPublishMock,
                        },
                    }),
                },
            );

            result.current.mutate({
                resource: "posts",
                values: [{ id: 1 }, { id: 2 }],
            });

            await waitForNextUpdate();

            await waitFor(() => {
                return result.current.isSuccess;
            });

            expect(onPublishMock).toBeCalled();
            expect(onPublishMock).toHaveBeenCalledWith({
                channel: "resources/posts",
                date: expect.any(Date),
                type: "created",
                payload: {
                    ids: ["1", "2"],
                },
            });
        });
    });
});
