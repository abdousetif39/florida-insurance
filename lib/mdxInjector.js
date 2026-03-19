import { compile } from '@mdx-js/mdx';
import { visit } from 'unist-util-visit';

function remarkAffiliateInjector() {
  return (tree) => {
    let h2Count = 0;

    visit(tree, 'heading', (node, index, parent) => {
      if (node.depth === 2) {
        h2Count++;

        if (h2Count === 1 || h2Count === 3) {
          parent.children.splice(index + 1, 0, {
            type: 'mdxJsxFlowElement',
            name: 'AffiliateCTA',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'city',
                value: 'Florida',
              },
            ],
            children: [],
          });
        }
      }
    });
  };
}

export async function injectAffiliate(content) {
  const result = await compile(content, {
    remarkPlugins: [remarkAffiliateInjector],
  });

  return String(result);
}