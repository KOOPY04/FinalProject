import { TreeDataNode } from 'antd';
import FileTree from './FileTree';

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected remote node key:', key);
};

const initialTreeData = [
  {
    title: '遠端根目錄',
    key: 'remoteStorage',
    children: undefined,
  },
];

export default function Remote() {
  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      <FileTree onNodeSelect={handleNodeSelect} initialTreeData={initialTreeData} isLocal={false} />
    </div>
  );
}
