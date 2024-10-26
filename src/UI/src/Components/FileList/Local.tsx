import { TreeDataNode } from 'antd';
import FileTree from './FileTree';

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected node key:', key);
};

const initialTreeData = [
  {
    title: '根目錄',
    key: 'localStorage',
    children: undefined,
  },
];

export default function Local() {
  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      <FileTree onNodeSelect={handleNodeSelect} initialTreeData={initialTreeData} isLocal={true} />
    </div>
  );
}
