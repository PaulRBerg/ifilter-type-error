import { useMemo } from "react";

interface IFilter {
streamIds?: string[];
}

function toFilter(): IFilter {
    return {
        streamIds: ["1"],
    };
}

interface FooProps {
    chainId: number;
}

function Foo(props: FooProps) {
    const filter = useMemo(
      () => {
        props;
          return toFilter();
      },
      [props],
    );
    
    const variables = useMemo(() => {
      // Comment the following three lines to get rid of the the type error.
      // TypeScript complains because of the possibility that `filter.streamIds` is undefined at runtime.
      // if (!filter.streamIds) {
      //   return { streamId: "CAUGHT" };
      // }
      return {
        streamId: filter.streamIds[0].toLowerCase(),
      };
    }, [filter]);

    return <>Foo: {variables.streamId}</>
}

  export default Foo;