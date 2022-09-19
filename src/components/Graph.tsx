import { useEffect, useState } from 'react';
import ForceGraph2D, { GraphData, NodeObject } from 'react-force-graph-2d';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { graphData } from '../framework/pages';
import { Box } from '@mui/material';

interface CorrectNode extends Required<NodeObject> {
  name: string;
}


export const Graph = () => {
  // https://github.com/vasturiano/react-force-graph/issues/379#issuecomment-1211617084
  const [data, setData] = useState<GraphData>({ nodes: [], links: [] });
  useEffect(() => {
    setData(graphData);
  }, []);
  const navigate = useNavigate();
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'grey.A200',
        display: 'inline-block'
      }}
    >
      <ForceGraph2D
        width={600}
        height={400}
        graphData={data}
        linkColor={() => palette.secondary.light}
        nodeColor={() => palette.primary.light}
        onNodeClick={({ id }: NodeObject) => navigate(`${id}`)}
        nodeCanvasObjectMode={() => "after"}
        nodeCanvasObject={(node: NodeObject, ctx, globalScale) => {
          const cNode = node as CorrectNode;
          const label = cNode.name;
          ctx.font = `${12 / globalScale}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = palette.text.primary;
          ctx.fillText(label, cNode.x, cNode.y + 10);
        }}
      />
    </Box>
  );
}